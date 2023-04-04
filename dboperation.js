var config = require("./dbconfig");
const sql = require("mssql");

async function getdata() {
  try {
    let pool = await sql.connect(config);
    console.log("SQL conectado...");
  } catch (error) {
    console.log(" conect-error :" + error);
  }
}

//Retorna a lista de aniversariantes
async function getdata_withQuery() {
  try {
    let pool = await sql.connect(config);
    let res = await pool
      .request()
      .query(
        //Query utilizada para teste, apaague a query abaixo e coloque a sua.
        "SELECT nom_emprg,dat_nascm_emprg, cod_email_emprg FROM empregado   WHERE  MONTH (dat_nascm_emprg) = '5' AND cod_email_emprg IS NOT NULL   ORDER BY DAY (dat_nascm_emprg) "
      );
    return res.recordsets;
  } catch (error) {
    console.log(" api-error :" + error);
  } 

  }
//Retorna a lista dos associados Ativos 
  async function associadosAtivos() {
    try {
      let pool = await sql.connect(config);
      let res = await pool
        .request()
        .query(
           //Query utilizada para teste, apaague a query abaixo e coloque a sua.
          "SELECT * FROM [AMADEUSCAEFE].[dbo].[Titulares_Ativos_New] "
        );
      return res.recordsets;
    } catch (error) {
      console.log(" associados_ativos-error :" + error);
    } 
  
    }

module.exports = {
  getdata: getdata,
  getdata_withQuery: getdata_withQuery,
  associadosAtivos: associadosAtivos,
};
