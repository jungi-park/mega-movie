import './Main.css';
import Counter from '../components/Counter';
const Main = () => {
  return (
    <div id="form">
      <input placeholder="이름" type="text"></input>
      <input placeholder="생일" type="text"></input>
      <input placeholder="이메일" type="text"></input>
      <input placeholder="비밀번호" type="text"></input>
      <input placeholder="핸드폰번호" type="text"></input>
      <input placeholder="성별" type="text"></input>
    </div>
  );
};

export default Main;
