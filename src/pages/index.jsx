import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Layout from '@/components/layout';

export default function Home() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios.get('/api/authors')
      .then(res => setAuthors(res.data))
  }, []);

  const handleDelete = id => {
    axios.delete(`/api/authors/${id}`)
      .then(_ => setAuthors(prev => prev.filter(author => author._id !== id)))
  }

  return (
    <Layout home>
      <table>
        <thead>
          <tr>
            <th>Author</th>
            <th>Actions Available</th>
          </tr>
        </thead>
        <tbody>
          { authors.map((author, i) => (
            <tr key={ i }>
              <td>{author.name}</td>
              <td>
                <Link href={`/edit/${author._id}`}>Edit</Link>
                <button onClick={ () => handleDelete(author._id) }>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}
