import Layout from "@/components/layout";
import AuthorForm from "@/components/authorForm";
import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Edit() {
    const router = useRouter();
    const [author, setAuthor] = useState();

    useEffect(() => {
        if (router.isReady) {
            axios.get(`/api/authors/${router.query.id}`)
                .then(res => setAuthor(res.data))
                .catch(console.error);
        }
    },[router.isReady]);

    if (!author) return <h1>Loading...</h1>;

    return (
        <Layout>
            <p>Edit this author:</p>
            <AuthorForm 
                values={ author }
                submitAction={ author => axios.put(`/api/authors/${router.query.id}`, author) }
            />
        </Layout>
    )
}