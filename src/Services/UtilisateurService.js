import axios from "axios";

function addUtilisateur(utilisateur){
    return axios.post("http://127.0.0.1:8080/inscription", utilisateur, {
    headers : {
        'Content-Type' : 'application/json'
    }
})
}
function loginUtilisateur(utilisateur) {
    return axios.post("http://127.0.0.1:8080/connexion", utilisateur, {
        headers : {
            'Content-Type' : 'application/json'
        }
    })
    

}

// function fetchConnexion(connexions){
//     return axios.post("http://127.0.0.1:8080/connexion", connexions, {
//         headers : {
//             'Content-Type' : 'application/json'
//         }

//     })
// }

// function ConnAdmin(admin) {
//     return axios.get("http://127.0.0.1.8080/admin", admin)
// }

export default {
    addUtilisateur,
    // fetchConnexion,
    loginUtilisateur
    // ConnAdmin
}