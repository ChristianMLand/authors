import Link from "next/link"
import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/base.module.css';

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
        <form onSubmit={ handleSubmit } className={styles.form}>
            <input name="name" type="text" placeholder="Name" value={formData.name} onChange={ handleChange } />
            { formErrors && <p className={styles.error}>{formErrors.name.message}</p> }
            <div>
                <Link href="/" className={styles.button}>Cancel</Link>
                <button className={styles.button}>Submit</button>
            </div>
        </form>
    )
}