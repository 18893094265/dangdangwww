import {BASEURL} from "../commons/config"
const DETAILURL =`${BASEURL}/detailinfo`;
export default{
    getDetailInfo(cb){
        fetch(DETAILURL).then(res=>{
            res.json().then(cb)
        })
    }
}