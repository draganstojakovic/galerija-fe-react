import { useParams, Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeSelectSingleGallery } from "../store/gallery/selector";
import { getSingleGalleryAction } from "../store/gallery/slice";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useFormattedDate } from "../hooks/useFormattedDate";
import { CommentDetails } from "./components/CommentDetails.component";
import { CommentForm } from "./components/CommentForm.component";
import { submitNewCommentAction } from "../store/comment/slice";
import { showCommentsByGalleryIdAction } from "../store/comment/slice";
import { makeSelectComments } from "../store/comment/selector";
import { deleteCommentAction } from "../store/comment/slice";
import { makeSelectAuthUser } from "../store/auth/selector";
import { getAuthUserAction } from "../store/auth/slice";
import { deleteGalleryAction } from "../store/gallery/slice";

export const SingleGalleryPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const token = window.localStorage.getItem("loginToken");
  const singleGallery = useSelector(makeSelectSingleGallery);
  const comments = useSelector(makeSelectComments);
  const authUser = useSelector(makeSelectAuthUser);
  const dispatch = useDispatch();
  const date = useFormattedDate(singleGallery.created_at);

  const [comment, setComment] = useState({
    content: "",
  });

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    if (!comment.content) {
      alert("Comment field cannot be blank");
      return;
    }
    try {
      dispatch(submitNewCommentAction({ id: id, data: comment }));
    } catch (err) {
      console.error(err);
    }
    setComment({
      content: "",
    });
  };

  const handleDeleteComment = (commentId) => {
    const response = window.confirm("Are you sure?");
    if (!response) {
      return;
    }
    if (authUser) {
      try {
        dispatch(deleteCommentAction(commentId));
        window.location.replace(`/galleries/${id}`);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleDeleteGallery = (id) => {
    const response = window.confirm("Are you sure?");
    if (!response) {
      return;
    }
    try {
      dispatch(deleteGalleryAction(id));
      history.push("/my-galleries");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (token) {
      dispatch(getAuthUserAction());
    }
  }, [dispatch, token]);

  useEffect(() => {
    dispatch(getSingleGalleryAction(id));
  }, [id, dispatch]);

  useEffect(() => {
    dispatch(showCommentsByGalleryIdAction(Number(singleGallery.id)));
  }, [dispatch, singleGallery]);

  return (
    <div>
      <br />
      <h1 className="d-flex justify-content-center">{singleGallery.title}</h1>
      <br />
      <h5 className="d-flex justify-content-center">
        <Link to={`/authors/${singleGallery.user.id}`}>
          {singleGallery.user.first_name} {singleGallery.user.last_name}
        </Link>
      </h5>
      {authUser.id === singleGallery.user_id && (
        <>
          <br />
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-primary"
              onClick={() => handleDeleteGallery(singleGallery.id)}
            >
              Delete Gallery
            </button>
          </div>
        </>
      )}
      <br />
      <p className="d-flex justify-content-center">{date}</p>
      {singleGallery.description ? (
        <>
          <br />
          <div className="card mx-5">
            <div className="d-flex justify-content-center">
              <h3>Description:</h3>
            </div>
            <div className="d-flex justify-content-center">
              <p>{singleGallery.description}</p>
            </div>
          </div>
        </>
      ) : (
        <div className="d-flex justify-content-center">
          <b>. . .</b>
          <br />
          <br />
        </div>
      )}
      <br />
      <div className="card mx-5">
        <Carousel>
          {singleGallery &&
            singleGallery.image_url.map((url, i) => (
              <div key={i} onClick={() => window.open(url)}>
                <img src={url} alt="" />
              </div>
            ))}
        </Carousel>
      </div>
      <br />
      {!!window.localStorage.getItem("loginToken") && (
        <CommentForm
          comment={comment}
          onChange={setComment}
          handleSubmit={handleSubmitComment}
        />
      )}
      <br />
      <br />
      {comments?.map((comment, i) => (
        <div className="border border-primary" key={i}>
          <CommentDetails
            commentId={comment.id}
            authUserId={authUser.id}
            handleDeleteComment={handleDeleteComment}
            content={comment.content}
            createdAt={comment.created_at}
            userId={comment.user_id}
          />
          <br />
        </div>
      ))}
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
