import { NextApiRequest, NextApiResponse } from "next";

const handleImage = async (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.query;

  try {
    const metaRes = await fetch(query?.fetchUrl as string);
    const meta = await metaRes.json();
    return res.status(200).json(meta);
  } catch (e: any) {
    return res.status(422).json({message: e?.message});
  }
};

export default handleImage;
