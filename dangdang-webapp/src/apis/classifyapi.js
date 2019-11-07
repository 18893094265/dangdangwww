import {BASEURL} from "../commons/config"
const CARTURL =`${BASEURL}/classifyinfo`;
export default{
    getIndexInfo(cb){
        fetch(CARTURL).then(res=>{
            res.json().then(cb)
        })
    }
}