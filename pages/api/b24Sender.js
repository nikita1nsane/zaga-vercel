import b24 from 'b24'
import express from 'express'

export default function (req, res) {
    const app = express()

const bitrix24 = new b24.Bitrix24({
    config: {
        mode: "webhook",
        host: "tochka360.bitrix24.ru",
        user_id: "3854",
        code: "lks5d4ibptq1vp92"
    }
})


app.get('/crmLeadAdd', async (req, res) => {
    try{
        const result = await bitrix24.callMethod('crm.lead.add', {
            fields: { 
                'TITLE': "Заголовок с нового сайта zaga-game.ru",
                'NAME': req.body.name,
                'EMAIL': req.body.email,
                'phone': req.body.phone,
                'PHONE': [
                    {
                        'VALUE': req.body.email,
                        'VALUE_TYPE': 'WORK',
                    }
                ],
                'EMAIL': [
                    {
                        'VALUE': req.body.email,
                        'VALUE_TYPE': 'WORK'
                    }
                ],
                "CONTACT_ID": "NEW",
                'TYPE_ID': "GOODS",
                'STAGE_ID': "NEW",
                'OPENED': "Y",
            },
            params: { "REGISTER_SONET_EVENT": "Y" }
        });
        return res.json(result);        
    }catch(err){
        console.log(err)
        return res.status(500).json({message:"Internal Server Error"});
    }
})

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
}