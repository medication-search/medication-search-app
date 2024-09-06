import * as styles from './HomeLayout.styles.tsx';
import Banner from '@/common/banner/Banner.tsx';
import Main from '@assets/icons/home/MainImage.svg';
import HomeSearchBox from '@components/home/home-search-box/HomeSearchBox.tsx';

const HomeLayout = () => {
  return (
    <>
      <Banner />
      <styles.Container>
        <Main />
        <HomeSearchBox />
      </styles.Container>
    </>
  );
};

export default HomeLayout;
