process.loadEnvFile()

//const express = require('express') // CommonJS
import express from 'express'
import path from 'path'
import { Resend } from 'resend'

const app = express()
const resend = new Resend(process.env.RSAPIKEY)

app.use(express.json())

app.use(express.static('static'))

app.get('/',(req,res) => res.sendFile(`${path.resolve()}/static/template/index.html`))

app.post('/send',async (req,res) => {
    const { to, subject, html } = req.body
    const responseResend = await resend.emails.send({
        from:process.env.FROM,
        to:to,
        subject:subject,
        html:html
    })
    if(responseResend.data){
        res.sendStatus(204)
        return
    }
    res.status(responseResend.error.statusCode).send(`No fue pos1ible enviar el correo (${responseResend.error.message})`)
})

app.listen(process.env.PORT,() => console.log(`Aplicacion iniciada en el puerto ${process.env.PORT}`))