async function PutProyectos (image) {
  try {
    const response = await fetch("http://localhost:3001/images/"+id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(image)
  });

  return await response.json();
} 

catch (error) {
    console.error('Error update user:', error);
    throw error;
}
};

export { PutProyectos };