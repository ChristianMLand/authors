import Link from "next/link"
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function AuthorForm({ values, submitAction }) {
    const router = useRouter();
    const [formData, setFormData] = useState(values ?? { name : "" });
    const [formErrors, setFormErrors] = useState();

    const handleSubmit = e => {
        e.preventDefault();
        submitAction(formData)
            .then(_ => router.push("/"))
            .catch(err => setFormErrors(err.response.data.errors));
    }

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name] : e.target.value });
    }

    return (
        <form onSubmit={ handleSubmit }>
            <label htmlFor="name">Name: </label>
            <input name="name" type="text" id="name" value={formData.name} onChange={ handleChange } />
            { formErrors && <p>{formErrors["name"].message}</p> }
            <Link href="/">Cancel</Link>
            <button>Submit</button>
        </form>
    )
}