const pg = require('pg');
const pgClient = new pg.Client('postgres://newhacks:da-3-csnakes@juicy-panda-5wx.gcp-us-east4.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&sslrootcert=juicy-panda-ca.crt');
pgClient.connect();

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.helloWorld = async (req, res) => {
  if(req.method === 'GET') {
    const query = await pgClient.query("SELECT value from cache WHERE key='" + req.query.code + "'");
    res.send(query.rows[0]);
  } else if(req.method === 'DELETE') { 
    await pgClient.query("DELETE FROM cache WHERE DATEDIFF(minute, getDate(), dateColumn) < -10");
    res.send(200);
  } else {
    await pgClient.query("INSERT into cache (key, value) VALUES ('" + req.body.code + "', '" + req.body.url + "')");
    res.message(200);
  }
}