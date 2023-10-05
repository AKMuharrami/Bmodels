import nodemailer from "nodemailer";

export default async function GET(req, res) {
    console.log(req.body)
    // const {name, tel, email, gloc, city, town, poc} = req.body

    // const data = {
    //     name, tel, email, gloc, city, town, poc
    // }

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.USER,
            pass: process.env.PASS
        }
    });

    try {
        const mail= await transporter.sendMail({
            from: req.body.user,
            to: 'akmuharrami@gmail.com',
            replyTo: req.body.email,
            subject: `Order submission from ${req.body.name}`,
            html: `
            <p> ${req.body.name} </p>
            <p> ${req.body.tel} </p>
            <p> ${req.body.email} </p>
            <p> ${req.body.gloc} </p>
            <p> ${req.body.city} </p>
            <p> ${req.body.town} </p>
            <p> ${req.body.poc} </p>
            `
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "couldn't send the email. Your message was not sent."
        })
    };

    return res.status(200).json({name:'success'});
}