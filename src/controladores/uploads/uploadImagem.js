const uploadImagem = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ mensagem: 'Nenhuma imagem enviada' });
    }
    console.log("file => ", req.file)

    return res.status(200).json({ imageUrl: req.file.path });
};

module.exports = uploadImagem;