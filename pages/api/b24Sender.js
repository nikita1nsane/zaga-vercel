import b24 from 'b24'

export default function (req, res) {

    const bitrix24 = new b24.Bitrix24({
        config: {
            mode: "webhook",
            host: "tochka360.bitrix24.ru",
            user_id: "3854",
            code: "lks5d4ibptq1vp92"
        }
    })
    
    bitrix24.callMethod('crm.lead.add', {
        fields: { 
            'title': "Заголовок с нового сайта zaga-game.ru",
            'name': req.body.name,
            'email': req.body.email,
            'phone': req.body.phone,
        },
        params: { "REGISTER_SONET_EVENT": "Y" }
    })
    res.status(200)
}

