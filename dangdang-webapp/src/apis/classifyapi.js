import {BASEURL} from "../commons/config"
const CLASSIFYURL =`${BASEURL}/classifyinfo`;
export default{
    getclassifyInfo(cb){
        fetch(CLASSIFYURL).then(res=>{
            res.json().then(cb)
        })
    }
}