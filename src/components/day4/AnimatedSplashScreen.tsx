import { View } from 'react-native'
import LottieView from "lottie-react-native";
import { useRef } from 'react';
import  Animated, { FadeIn, FadeOut, ZoomOut }  from 'react-native-reanimated';

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);
const AnimatedSplashScreen = ({
  onAnimationFinish = (isCancelled) => {}} 
  : {onAnimationFinish: (isCancelled: boolean) => void;}) => {
    const animation = useRef<LottieView>(null);
  return (
    <Animated.View  style={{alignItems: "center",justifyContent: "center",flex: 1,backgroundColor: "black"}}>
           <AnimatedLottieView
           exiting={ZoomOut}
           ref={animation}
           onAnimationFinish={onAnimationFinish}
           loop={false}
           autoPlay
           style={{
             width: "80%",
             maxWidth: 400,
           }}
           source={require('@assets/lottie/netflix.json')}
         />
    </Animated.View> 
  )
}

export default AnimatedSplashScreen;