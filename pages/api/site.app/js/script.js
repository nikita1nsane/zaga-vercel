
export default function (req, res) {

    /**
 * Getting and Transforming Form Data
 * @param {*} form
 * @returns data
 */
    let getData = (form) => {
        const inputs = form.querySelectorAll('input');
        let data = {
            t_typ,
            t_src,
            t_mdm,
            t_cmp,
            t_cnt,
            t_trm,
            t_vst,
            t_pgs,
            t_afd,
            t_cpg,
            t_uag,
            gid: getCookie_MW("_ga"),
            yid: getCookie_MW("_ym_uid"),
            from_page: window.location.href,
        };
        let key;
        let val;
    
        for (let i = 0; i < inputs.length; i++) {
            key = inputs[i].getAttribute('name');
            val = inputs[i].value;
            data[key] = val;
        }
    
        return data;
    }
    let fetchData = (url, d) => {
        fetch(url, {
                method: "POST",
                body: d,
            })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success: ", data)
            })
            .catch((err) => {
                console.log("Error: ", err);
            });
    }
    
    let submitHandler = (event) => {
        event.preventDefault();
                
        let dataСollection = new FormData(event.target);
        let sendData = fetchData("/b24Sender.php", dataСollection);
    }
    
    // document.addEventListener("DOMContentLoaded", function(event) {
    //     let form = document.querySelectorAll('.form');
    
    //     for (let i = 0; i < form.length; i++) {
    //         form[i].addEventListener('submit', (event) => {
    //             event.preventDefault();
                
    //             let dataСollection = new FormData(event.target);
    //             let sendData = fetchData("/site.app/bitrix24/b24Sender.php", dataСollection);
    //         });
    //     }
    // });
}