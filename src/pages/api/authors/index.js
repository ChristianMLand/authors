import connect from '@/utils/connect';
import Author from '@/models/author.model';

export default async function handler(req, res) {
    await connect("authorsDB");

    switch (req.method) {
        case "GET":
            return Author.find()
                .then(allAuthors => res.json(allAuthors))
                .catch(error => res.status(400).json(error));
        case "POST":
            return Author.create(req.body)
                .then(author => res.json(author))
                .catch(error => res.status(400).json(error));
        default:
            return res.status(404).json({ message : "404 not found"});
    }
}