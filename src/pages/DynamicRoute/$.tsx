import { useParams } from 'umi';

export default () => {
  const params = useParams();
  console.log('params', params);
  // http://localhost:8000/DynamicRoute/xxx/xxx

  return <>通配1</>;
};
