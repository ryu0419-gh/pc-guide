"use client";

import { Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <Box position="relative" w="100%" overflow="hidden">
      {/* 背景画像 */}
      <Image
        src="/images/hero.jpg"
        alt="MIYA Guide Hero"
        layout="responsive"
        width={1920}
        height={600}
        style={{ objectFit: "cover" }}
      />

      {/* テキストブロック */}
      <Box
        position="absolute"
        top="40%" // タイトルをやや上に
        left="10%"
        transform="translateY(-40%)"
        color="white"
        textShadow="0 0 12px rgba(0,0,0,0.8)"
      >
        {/* タイトル */}
        <Heading
          as="h1"
          color="#44D7DA"
          fontFamily="'Staatliches', sans-serif"
          fontSize="clamp(3rem, 6vw, 6rem)"
          lineHeight="1.1"
        >
          Play Spec
        </Heading>
      </Box>

      {/* 説明文（別ボックスに分離して下寄せ） */}
      <Box
        position="absolute"
        bottom="12%" // 下からの位置を調整
        left="10%"
        color="white"
        textShadow="0 0 12px rgba(0,0,0,0.8)"
        maxW="700px"
      >
        <Text 
          fontSize={{ base: "lg", md: "xl" }} 
          lineHeight="1.6"
          fontFamily="'Noto Sans JP', sans-serif"
        >
          遊びたいゲームから推奨スペックとおすすめパーツを表示。
          <br />
          迷わず最適なPCを選べます。
        </Text>
      </Box>
    </Box>
  );
};
