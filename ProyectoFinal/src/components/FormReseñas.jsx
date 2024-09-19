import React, { useState } from 'react';
import '../styles/Reseñas.css';

const CommentBox = () => {
  const [nombre, setNombre] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0 || comment === '' || nombre === '') {
      alert('Por favor, completa todos los campos.');
      return;
    }

    const newReview = {
      nombre,
      comment,
      rating,
      id: Date.now(), 
    };

    setReviews([...reviews, newReview]);

    setNombre('');
    setComment('');
    setRating(0);
    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 2000);
  };

  const handleRating = (value) => {
    setRating(value);
  };

  return (  
    <div className='contenedorReseñas'>
    <div className="comment-box">
      <h2 className='headerFormReseñas'>Deja tu comentario y evaluación</h2>

      <form onSubmit={handleSubmit}>
        <div>
            
          <input 
            className='inputFormReseñas' 
            type="text"
            placeholder="Nombre" 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)} />

          <textarea
            className='boxComment'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Escribe tu comentario..."
            rows="5"  
          ></textarea>
        </div>

        <div className="rating">
          <label className='textEvaluacion'>Evaluación: </label>
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              starId={star}
              rating={rating}
              onClick={() => handleRating(star)}
            />
          ))}
        </div>

        <button className='btnComment' type="submit" disabled={submitted}>
          {submitted ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
    </div>
    <div className="reviews">
        <h3 className='tituloReseñas'>Reseñas:</h3>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id} className="review">
              <p className='pNombre'>{review.nombre}</p>
              <p>{review.comment}</p>
              <p>{'⭐'.repeat(review.rating)}</p>
            </div>
          ))
        ) : (
          <p>No hay reseñas aún.</p>
        )}
      </div>
    </div>
  );
};

  const Star = ({ starId, rating, onClick }) => {
    return (
      <span
        className={`star ${rating >= starId ? 'filled' : ''}`}
        onClick={onClick}
        style={{ cursor: 'pointer', fontSize: '20px' }}
      >
        &#9733;
      </span>
      
    );
  };

export default CommentBox;
