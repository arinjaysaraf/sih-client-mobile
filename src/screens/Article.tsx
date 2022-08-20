import React, { Component, useContext, useEffect, useState } from "react";
import {
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ITheme } from "../utils/contexts/interfaces";
import { ThemeContext } from "../utils/contexts";
import { BackArrowIcon, ShareIcon } from "../assets/icons";
import BackArrow from "../assets/icons/BackArrow";
import MainLayout from "../layouts/MainLayout";
import TextToSpeech from "../utils/contexts/TextToSpeech";

function getStyles(theme: ITheme): any {
  return StyleSheet.create({
    backArrowContainer: {
      position: "absolute",
      top: 44,
      marginStart: 32,
    },
    container: {
      backgroundColor: theme.colors.background,
      position: "relative",
    },

    content: {
      marginTop: 50,
      color: "black",
      fontSize: theme.fonts.subTitle.fontSize,
      fontFamily: theme.fonts.subTitle.fontFamily,
    },
    contentBody: {
      marginTop: 12,
      //color: "black",
      fontSize: theme.fonts.body.fontSize,
      fontFamily: theme.fonts.body.fontFamily,
    },
    contentContainer: {
      color: "black",
      paddingHorizontal: 24,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      marginTop: -20,
      zIndex: 9999,
      elevation: -1,
    },
    dayNews: {
      position: "absolute",
      backgroundColor: "rgba(246, 246, 246, 0.2)",
      alignItems: "center",
      borderRadius: 12,
      top: 180,
      padding: 4,
      width: 130,
      marginStart: 32,
    },
    innerContainer: {
      backgroundColor: "white",
      position: "absolute",
      width: SCREEN_WIDTH,
      top: 0,
      left: 0,
      zIndex: 9999,
    },
    header: {
      textAlign: "center",
      fontSize: 18,
      color: "black",
      marginTop: 16,
      marginStart: 10,
      alignSelf: "flex-start",
      fontWeight: "bold",
    },

    more: {
      position: "absolute",
      top: 315,
      left: 32,
      width: 300,
      color: "white",
      fontSize: 16,
    },
    news: {
      color: "white",
      fontWeight: "bold",
      position: "absolute",
      top: 220,
      left: 32,
      fontSize: 24,
      width: 300,
    },
    scrollContainer: {
      //padding: 16,
      paddingTop: HEADER_EXPANDED_HEIGHT,
    },
    shareIconContainer: {
      position: "absolute",
      top: 44,
      right: 40,
      width: 40,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      borderRadius: 20,
    },
    textNews: {
      fontSize: 12,
      color: "white",
      fontWeight: "bold",
    },
  });
}

const HEADER_EXPANDED_HEIGHT = 400;
const HEADER_COLLAPSED_HEIGHT = 50;

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const Article: React.FC = () => {
  const [scrollY, setscrollY] = useState(new Animated.Value(0));
  const [headerHeight, setHeaderHeight] = useState<any>(0);
  const [borderRadius, setBorderRadius] = useState<any>(0);
  const [topHeight, setTopHeight] = useState<any>(0);
  const [headerTitleOpacity, setHeaderTitleOpacity] = useState<any>(0);
  const [heroTitleOpacity, setHeroTitleOpacity] = useState<any>(0);

  const [flag, setFlag] = useState<boolean>(false);
  const [body, Setbody] = useState<string>(
    "कमोडोर संजय पांडा कमांडिंग ऑफिसर, आईएनएस मंडोवी ने 20 अगस्त 22 की तड़के गोवा से पोर्ट लुइस, मॉरीशस के लिए एक नौकायन अभियान को हरी झंडी दिखाई। अभियान आईएनएसवी तारिणी पर छह (तीन महिला अधिकारियों सहित) के दल द्वारा चलाया जा रहा है। लगभग 2500 एनएम (लगभग 45000 किमी) की दूरी को एक तरफ से कवर करते हुए, चालक दल, 20 - 21 दिनों की अवधि में अत्यधिक मौसम और मानसून की खराब समुद्री परिस्थितियों का सामना करने की उम्मीद है। इन परिस्थितियों में नौकायन के अलावा चालक दल नाव रखरखाव, मशीनरी दिनचर्या और अपना भोजन तैयार करने का भी कार्य करेगा। एक बार जब वे भारतीय तटों को छोड़ देंगे तो मरग ननसटप हग। भरतय नसन क पस छह महसगरय भरतय नसन नकयन पत (आईएनएसव) ह, जस महदई, तरण, बलबल, हरयल, कदलपर और नलकठ उनक सच म। य नकए नयमत रप स नसनक करमय क एक छट दल क सथ अभयन सबध नकयन करत ह। समदर उडन क लए चलक दल क चयन परयपत समदर नकयन अनभव वल सवयसवक म स कय जत ह। समदर नकयन एक अतयत कठन सहसक खल ह। य समदर नकयन अभयन सहसक क भवन पद करन म मदद करत ह, जखम लन क कषमत क बढन क सथ-सथ नवगशन, सचर, इजन और जहज पर मशनर क तकनक सचलन, इनमरसट उपकरण क सचलन, रसद यजन आद सहत आवशयक नवक कशल क सममन करत ह। यह परयजन क भरतय नसन क कषमत क भ बढत ह। सगर परकरम और कप टउन स रय ड जनरय दड, आईओएनएस और बगल क खड क नकयन अभयन जस नकयन अभयन म भग लकर दनय भर म अपन समय उपसथत। तरण क 2017 म सभ महल अधकरय क दल क सथ गलब 'नवक सगर परकरम' क लए जन जत ह। वरतमन अभयन म, चयनत दल एक लग तटसथ ह जसम परतयक म तन परष और तन महल अधकर शमल ह। पत क भरतय नसन क सबस अनभव नवक कपटन वड महरश दवर सकप कय ज रह ह। चलक दल क सदसय म कमडर वकस शयरण, लफटनट कमडर पयल गपत, लफटनट कमडर कशल पडनकर, लफटनट कमडर दलन क और लफटनट कमडर रप ए शमल ह।"
  );

  const { readText, stopTTS } = useContext(TextToSpeech);

  useEffect(() => {
    setHeaderHeight(
      scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
        outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
        extrapolate: "clamp",
      })
    );
    setBorderRadius(
      scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
        outputRange: [30, 0],
        extrapolate: "clamp",
      })
    );

    setTopHeight(
      scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
        outputRange: [0, HEADER_COLLAPSED_HEIGHT - HEADER_EXPANDED_HEIGHT],
        extrapolate: "clamp",
      })
    );
    setHeaderTitleOpacity(
      scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
        outputRange: [0, 1],
        extrapolate: "clamp",
      })
    );
    setHeroTitleOpacity(
      scrollY.interpolate({
        inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
        outputRange: [1, 0],
        extrapolate: "clamp",
      })
    );
  }, [scrollY]);

  const { theme } = useContext(ThemeContext);

  return (
    <MainLayout
      customStyles={getStyles(theme).container}
      disableDefaultPadding={true}
    >
      <Animated.View
        style={{
          ...getStyles(theme).innerContainer,
          height: headerHeight,
          // borderBottomLeftRadius: borderRadius,
          // borderBottomRightRadius: borderRadius,
        }}
      >
        <Animated.View
          style={{ ...getStyles(theme).header, opacity: headerTitleOpacity }}
        >
          <BackArrowIcon />
        </Animated.View>

        <Animated.View
          style={{
            position: "absolute",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            opacity: heroTitleOpacity,
            top: topHeight,
            // borderBottomLeftRadius: borderRadius,
            // borderBottomRightRadius: borderRadius,
          }}
        >
          <Animated.Image
            source={require("../assets/ArticleBackground.png")}
            style={{
              opacity: 0.6,
              // borderBottomLeftRadius: borderRadius,
              // borderBottomRightRadius: borderRadius,
              width: SCREEN_WIDTH,
              height: HEADER_EXPANDED_HEIGHT,
            }}
          />

          <View style={getStyles(theme).backArrowContainer}>
            <BackArrow color="white" />
          </View>
          <View style={getStyles(theme).shareIconContainer}>
            <ShareIcon color="white" />
          </View>
          <View style={getStyles(theme).dayNews}>
            <Text style={getStyles(theme).textNews}>वित्त मत्रांलय</Text>
          </View>
          <Text
            numberOfLines={4}
            ellipsizeMode="tail"
            style={getStyles(theme).news}
          >
            प्रीतम सिवाच अकादमी ने खेलो इंडिया महिला हॉकी लीग जीती (यू-21)
          </Text>
          <Text style={getStyles(theme).more}>
            प्रीतम सिवाच हॉकी अकादमी, सोनीपत, खेलो के विजेता बने भारत महिला हॉकी
            लीग (अंडर-21) के बाद...
          </Text>
        </Animated.View>
      </Animated.View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={getStyles(theme).scrollContainer}
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                y: scrollY,
              },
            },
          },
        ])}
        scrollEventThrottle={16}
      >
        <View style={getStyles(theme).contentContainer}>
          <Text style={getStyles(theme).content}>
            प्रीतम सिवाच अकादमी ने खेलो इंडिया महिला हॉकी लीग जीती (यू-21)
          </Text>
          <Text style={getStyles(theme).contentBody}>{body}</Text>

          <TouchableOpacity
            style={{
              marginStart: "auto",
              marginTop: 10,
            }}
            onPress={() => {
              if (flag) {
                stopTTS();
                setFlag(false);
              } else {
                readText(body);
                setFlag(true);
              }
            }}
          >
            <Image
              source={require("../assets/TTSIcon.png")}
              style={{ width: 100, height: 100 }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </MainLayout>
  );
};

export default Article;
