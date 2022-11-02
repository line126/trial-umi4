import { useParams } from 'umi';

export default () => {
  const params = useParams();
  console.log('params', params);
  // http://localhost:8000/NormalDynamicRoute/xxx&uuu
  
  return <>$a&$b</>;
};
