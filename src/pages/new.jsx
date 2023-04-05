import Layout from "@/components/layout";
import AuthorForm from "@/components/authorForm";
import axios from "axios";

export default function New() {
    return (
        <Layout>
            <p>Create an Author:</p>
            <AuthorForm 
                type="Create"
                submitAction={ author => axios.post("/api/authors", author) }
            />
        </Layout>
    )
}