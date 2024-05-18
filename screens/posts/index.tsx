import Container from "../../components/overal/container";
import { Image, ScrollView, View } from "react-native";
import Navigate from "../../components/utils/navigate";
import CustomText from "../../components/utils/text";
import Header from "../../components/overal/header";
import styles from "./styles";

export default function Posts() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView style={styles.posts}>
        <Container>
          <CustomText style={styles.title}>توسعه و تعالی</CustomText>
          <View style={styles.flexWrapper}>
            <Navigate
              to={"renderPosts"}
              params={{ category: 41 }}
              style={styles.navigate}
            >
              <View
                style={[styles.iconWrapper, { backgroundColor: "#00D6BA" }]}
              >
                <Image
                  source={require("../../assets/icons/AI.png")}
                  style={styles.icon}
                  alt="ai"
                />
              </View>
              <CustomText>هوش مصنوعی</CustomText>
            </Navigate>
            <Navigate
              to={"renderPosts"}
              params={{ category: 17 }}
              style={styles.navigate}
            >
              <View
                style={[styles.iconWrapper, { backgroundColor: "#FEBC04" }]}
              >
                <Image
                  source={require("../../assets/icons/book.png")}
                  style={styles.icon}
                  alt="books"
                />
              </View>
              <CustomText>معرفی کتاب</CustomText>
            </Navigate>
            <Navigate
              to={"renderPosts"}
              params={{ category: 16 }}
              style={styles.navigate}
            >
              <View
                style={[styles.iconWrapper, { backgroundColor: "#FE612C" }]}
              >
                <Image
                  source={require("../../assets/icons/podcast.png")}
                  alt=""
                  style={styles.icon}
                />
              </View>
              <CustomText>پادکست ها</CustomText>
            </Navigate>
            <Navigate
              to={"renderPosts"}
              params={{ category: 19 }}
              style={styles.navigate}
            >
              <View
                style={[styles.iconWrapper, { backgroundColor: "#46B5FD" }]}
              >
                <Image
                  source={require("../../assets/icons/dress.png")}
                  alt=""
                  style={styles.icon}
                />
              </View>
              <CustomText>سبک پوشش</CustomText>
            </Navigate>
            <Navigate
              to={"renderPosts"}
              params={{ category: 20 }}
              style={styles.navigate}
            >
              <View
                style={[styles.iconWrapper, { backgroundColor: "#7E84FF" }]}
              >
                <Image
                  source={require("../../assets/icons/psychology.png")}
                  alt=""
                  style={styles.icon}
                />
              </View>
              <CustomText>روان شناسی</CustomText>
            </Navigate>
            <Navigate
              to={"renderPosts"}
              params={{ category: 21 }}
              style={styles.navigate}
            >
              <View
                style={[styles.iconWrapper, { backgroundColor: "#36D16C" }]}
              >
                <Image
                  source={require("../../assets/icons/education.png")}
                  alt=""
                  style={styles.icon}
                />
              </View>
              <CustomText>آموزش</CustomText>
            </Navigate>
            <Navigate
              to={"renderPosts"}
              params={{
                category: [2, 3, 5, 14, 15, 16, 17, 18, 21, 19, 22, 23, 40],
              }}
              style={styles.navigate}
            >
              <View
                style={[styles.iconWrapper, { backgroundColor: "#556EFE" }]}
              >
                <Image
                  source={require("../../assets/icons/white-left-chevron.png")}
                  style={styles.icon}
                  alt=""
                />
              </View>
              <CustomText>همه موارد</CustomText>
            </Navigate>
          </View>
          <View style={styles.seperator}></View>
          <CustomText style={styles.title}>رفاهی</CustomText>
          <View style={styles.flexWrapper}>
            <Navigate
              to={"renderPosts"}
              params={{ category: 29 }}
              style={styles.navigate}
            >
              <View
                style={[styles.iconWrapper, { backgroundColor: "#00D6BA" }]}
              >
                <Image
                  source={require("../../assets/icons/bag.png")}
                  alt=""
                  style={styles.icon}
                />
              </View>
              <CustomText>کارمندان نمونه</CustomText>
            </Navigate>
            <Navigate
              to={"renderPosts"}
              params={{ category: 43 }}
              style={styles.navigate}
            >
              <View
                style={[styles.iconWrapper, { backgroundColor: "#FEBC04" }]}
              >
                <Image
                  source={require("../../assets/icons/shop.png")}
                  alt=""
                  style={styles.icon}
                />
              </View>
              <CustomText>تخفیفات داغ</CustomText>
            </Navigate>
            <Navigate
              to={"renderPosts"}
              params={{ category: 28 }}
              style={styles.navigate}
            >
              <View
                style={[styles.iconWrapper, { backgroundColor: "#FE612C" }]}
              >
                <Image
                  source={require("../../assets/icons/biography.png")}
                  alt=""
                  style={styles.icon}
                />
              </View>
              <CustomText>بیوگرافی</CustomText>
            </Navigate>
            <Navigate
              to={"renderPosts"}
              params={{ category: 1 }}
              style={styles.navigate}
            >
              <View
                style={[styles.iconWrapper, { backgroundColor: "#46B5FD" }]}
              >
                <Image
                  source={require("../../assets/icons/happy.png")}
                  alt=""
                  style={styles.icon}
                />
              </View>
              <CustomText>هنر و سرگرمی</CustomText>
            </Navigate>
            <Navigate
              to={"renderPosts"}
              params={{ category: 34 }}
              style={styles.navigate}
            >
              <View
                style={[styles.iconWrapper, { backgroundColor: "#7E84FF" }]}
              >
                <Image
                  source={require("../../assets/icons/health.png")}
                  alt=""
                  style={styles.icon}
                />
              </View>
              <CustomText>سلامتی</CustomText>
            </Navigate>
            <Navigate
              to={"renderPosts"}
              params={{ category: 44 }}
              style={styles.navigate}
            >
              <View
                style={[styles.iconWrapper, { backgroundColor: "#36D16C" }]}
              >
                <Image
                  source={require("../../assets/icons/travel.png")}
                  alt=""
                  style={styles.icon}
                />
              </View>
              <CustomText>گردشگری</CustomText>
            </Navigate>
            <Navigate
              to={"renderPosts"}
              params={{
                category: [43, 1, 28, 34, 44, 29, 20, 24, 27, 36, 39, 42],
              }}
              style={styles.navigate}
            >
              <View
                style={[styles.iconWrapper, { backgroundColor: "#556EFE" }]}
              >
                <Image
                  source={require("../../assets/icons/white-left-chevron.png")}
                  alt=""
                  style={styles.icon}
                />
              </View>
              <CustomText>همه موارد</CustomText>
            </Navigate>
          </View>
        </Container>
      </ScrollView>
    </View>
  );
}
