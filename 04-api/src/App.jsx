import CreatePostForm from "./CreatePostForm";
import PostList from "./demo/PostList";
import PaginatedPosts from "./pagination/PaginatedPosts";
import UserList from "./UserList";
import PostForm from "./zod-hookForm/PostForm";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto pt-10 ">
      {/* <h1>User List</h1> */}
      {/* <UserList /> */}
      {/* <h1>CreatePostForm</h1>
      <CreatePostForm /> */}

      {/* <h1 className="text-center mb-5">PaginationPage</h1>
        <PaginatedPosts /> */}

      {/* <PostList /> */}
      <PostForm />
    </div>
  );
};

export default App;
