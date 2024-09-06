import * as styles from './HomeSearchBox.styles.tsx';
import Search from '@assets/icons/home/Search.svg';

const HomeSearchBox = () => {
  return (
    <styles.Container>
      <styles.SearchBox>
        <styles.Input placeholder="약의 제품명/성분명을 입력해 주세요." />
        <styles.IconBox>
          <Search />
        </styles.IconBox>
      </styles.SearchBox>
      <styles.ButtonBox>
        <styles.ButtonText>모양으로 찾으러 가기</styles.ButtonText>
      </styles.ButtonBox>
    </styles.Container>
  );
};

export default HomeSearchBox;
