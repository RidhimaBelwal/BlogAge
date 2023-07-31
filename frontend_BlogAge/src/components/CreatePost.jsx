import 'react-quill/dist/quill.snow.css';
import {useState} from "react";
import {Navigate} from "react-router-dom";
import Editor from "./Editor";

export default function CreatePost() {
  const [title,setTitle] = useState('');
  const [summary,setSummary] = useState('');
  const [content,setContent] = useState('');
  const [files, setFiles] = useState('');
  const [redirect, setRedirect] = useState(false);
  async function createNewPost(ev) {
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', files[0]);
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/post', {
      method: 'POST',
      body: data,
      credentials: 'include',
    });
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <form onSubmit={createNewPost} className='m-5'>
      <input
        className="w-full mb-2 p-1 rounded border-slate-700 border "
        type="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder={"Title"}
      />
      <input
        className="w-full p-1 mb-2 rounded border border-slate-800"
        type="summary"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        placeholder={"Summary"}
      />
        
      <input 
      className='mt-2'
      type="file"
      onChange={(e) => setFiles(e.target.files)}
      />
      <Editor value={content} onChange={setContent} />

      <button className="w-full rounded bg-black/80 text-white/80 mt-16 py-1 ">
        Create Post
      </button>
    </form>
  );
};
