import {NextApiHandler} from "next";
import fs, {promises as fsPromise} from 'fs';
import path from "path";



const Posts: NextApiHandler = (req, res) => {
  getPosts();
  res.statusCode = 200;
  res.setHeader('content-type', 'application/json');
  res.write(JSON.stringify({name: 'trojan'}));
  res.end();
};

export default Posts;