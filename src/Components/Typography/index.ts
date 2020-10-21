import Paragraph from './Paragraph';
import Text from './Text';
import Title from './Title';

export default {
  componentName: 'Typography',
  showName: '排版',
  category: '通用',
  children: [
    {
      component: Paragraph,
      componentName: 'Paragraph',
      showName: '段落',
    },
    {
      component: Text,
      componentName: 'Text',
      showName: '文本',
    },
    {
      component: Title,
      componentName: 'Title',
      showName: '标题',
    },
  ],
};
