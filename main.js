Moralis.initialize("L2xaZjXsySR9IHB6IND1FHaCK2cuK0wVvXA9yNdF"); // Application id from moralis.io
Moralis.serverURL = "https://xvndizkxt57v.moralisweb3.com:2053/server"; //Server url from moralis.io

async function init() {
    try {
        let user = Moralis.User.current();
        if(!user)
        {
            $("#login_button").onclick(async () => {user = await Moralis.Web3.authenticate();
            })
        }
      renderGame();
        

    } catch (error) {
        console.log(error);
    }
}

function renderGame(){
    $("#game").show();
    $("#login_button").hide();
    $("#fr_logo").hide();

}

init();
