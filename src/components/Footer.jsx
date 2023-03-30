import { VStack, Grid, Text, HStack } from "@chakra-ui/react";

export default function Footer() {
  return (
    <VStack w="full" justifyContent={"center"} boxShadow={"sm"} bg="gray.900">
      <HStack
        justifyContent={"center"}
        w="full"
        borderTop="1px"
        borderBottom="1px"
        borderColor="gray.700"
        bg="gray.800"
      >
        <Grid
          w={{ sm: "sm", md: "xl", lg: "7xl" }}
          templateColumns={{
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(6, 1fr)",
          }}
          color="gray.600"
        >
          <HStack bg="gray.800" justifyContent={"center"} w="full" py="2">
            <Text>개인정보처리방침</Text>
          </HStack>
          <HStack bg="gray.800" justifyContent={"center"} w="full" py="2">
            <Text>서비스이용약관</Text>
          </HStack>
          <HStack bg="gray.800" justifyContent={"center"} w="full" py="2">
            <Text>업체소개</Text>
          </HStack>
          <HStack bg="gray.800" justifyContent={"center"} w="full" py="2">
            <Text>공지사항</Text>
          </HStack>
          <HStack bg="gray.800" justifyContent={"center"} w="full" py="2">
            <Text>고객센터</Text>
          </HStack>
          <HStack bg="gray.800" justifyContent={"center"} w="full" py="2">
            <Text>패밀리사이트</Text>
          </HStack>
        </Grid>
      </HStack>

      <HStack
        w={{ sm: "360px", md: "3xl", lg: "5xl", xl: "6xl", "2xl": "7xl" }}
        py="8"
        h="full"
        color="gray.300"
        justifyContent="space-between"
        // templateColumns={{
        //   sm: "repeat(1, 1fr)",
        //   lg: "repeat(2, 1fr)",
        // }}
      >
        <VStack
          fontSize="14"
          spacing="6"
          h="full"
          alignItems={"center"}
          display={{ sm: "none", lg: "block" }}
        >
          <VStack w="full" spacing={0} alignItems="flex-start">
            <Text>
              대표 : 조현진 | 대표번호 : 053-426-9490 | 이메일 :
              iwonuhak@gmail.com
            </Text>
            <Text>
              사업자등록번호 : 513ㅡ61ㅡ00074 | 통신판매업신고번호 :
              제2019-대구중구-0436호
            </Text>
            <Text>대구광역시 중구 남일동 36-1 미도빌딩 12층</Text>
          </VStack>
          <VStack w="full" spacing={0} alignItems="flex-start">
            <Text>ⓒ IWON Co., Ltd. All rights reserved.</Text>
          </VStack>
        </VStack>

        <VStack alignItems={{ sm: "flex-start", lg: "flex-end" }}>
          <Text fontWeight={600}>CS Center</Text>
          <Text fontSize="30" fontWeight={600}>
            053-426-9490
          </Text>
          <Text fontSize="14" textAlign={"start"}>
            평일 09:00 - 18:00 | 점심 12:00 - 13:00
            <br /> 토, 일요일 및 공휴일은 쉽니다.
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
}
