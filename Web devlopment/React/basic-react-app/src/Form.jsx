function handleSubmit(event) {
  event.preventDefault();
  console.log("form was submitted");
}
export default function Form() {
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Write something" />
      <button>Submit</button>
    </form>
  );
}
