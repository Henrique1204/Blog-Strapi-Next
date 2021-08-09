const removeHtml = (html: string): string => {
  let data = html.replace(/&lt;.*&gt;/gi, '');
  data = data.replace(/&lt;\/.*&gt;/gi, '');
  data = data.replace(/<[ˆ>]*>/gi, '');
  data = data.replace(/<\/[ˆ>]*>/gi, '');

  return data;
};

export default removeHtml;
