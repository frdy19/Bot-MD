// Hilih

let handler = async (m, { conn }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `${htki} *BIODATA* ${htka}`
let biooo =`${htjava} *💌 Nama* : Ferdy Firmansyah
${htjava} *♂️ Gender* : Pria
${htjava} *🕋 Agama* : Islam
${htjava} *⏰ Tanggal lahir* : 15 MEI 2005
${htjava} *🎨 Umur* : Hitung sndri
${htjava} *🧮 Kelas* : 2 SMA
${htjava} *🧩 Hobby* : MAIN HAPE
${htjava} *🗺️ Tinggal* : Banjarmasin, Kalsel, Indonesia 
•·––––––––––––––––––––––––––·•
`
await conn.sendButton(m.chat, teksbio, biooo, ppown, [["Sewa Bot", "/sewa"], ["Menu", "/menu"]], m)
}

handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bio|ownerbio|bioowner|ownerbot|own)$/i

export default handler
