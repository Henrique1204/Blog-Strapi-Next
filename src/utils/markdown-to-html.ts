import { remark } from 'remark';
import remarkHtml from 'remark-html';

const markDownToHtml = async (content: string): Promise<string> => {
  const data = await remark().use(remarkHtml).process(content);

  return String(data);
};

export default markDownToHtml;
