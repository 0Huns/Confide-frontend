import React from 'react';
import kakaoLoginImage from '../assets/kakao_login_large_wide.png';
const CLIENT_ID = process.env.REACT_APP_REST_API_KEY;
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URL;


const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

function Intro() {
  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  }
  return (
    <>
    <section className="relative flex flex-wrap lg:h-screen lg:items-center">
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Get started CONFIDE!</h1>

          <p className="mt-4 text-gray-500">
            CONFIDE 서비스는 하루의 고민을 털어버릴 수 있게 도와줍니다.<br/>
            여러분의 고민과 감정을 버리고 가세요!
          </p>
        </div>
        <div className='mx-auto mb-0 mt-8 max-w-md space-y-4 hover:cursor-pointer'>
          <img
              src={kakaoLoginImage} 
              alt="카카오 로그인" 
              onClick={handleKakaoLogin} 
            />
        </div>
      </div>

      <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
        <img
          alt="배경 이미지"
          src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </section>
    </>
  );
}

export default Intro;