import Navigate from "../../components/utils/navigate";
import CustomText from "../../components/utils/text";
import { Image, View } from "react-native";
import styles from "./styles";

export default function Posts() {
  return <View style={styles.posts}>
    <CustomText>توسعه و تعالی</CustomText>
    <Navigate to={""}>
        <View style={styles.iconWrapper}>
            <Image source={require("../../assets/icons/grow.png")} alt="" style={styles.icon} />
        </View>
        <CustomText>توسعه</CustomText>
    </Navigate>
    <Navigate to={""}>
        <View style={styles.iconWrapper}>
            <Image source={require("../../assets/icons/AI.png")} alt="" style={styles.icon} />
        </View>
        <CustomText>هوش مصنوعی</CustomText>
    </Navigate>
    <Navigate to={""}>
        <View style={styles.iconWrapper}>
            <Image source={require("../../assets/icons/book.png")} alt="" style={styles.icon} />
        </View>
        <CustomText>معرفی کتاب</CustomText>
    </Navigate>
    <Navigate to={""}>
        <View style={styles.iconWrapper}>
            <Image source={require("../../assets/icons/podcast.png")} alt="" style={styles.icon} />
        </View>
        <CustomText>معرفی کتاب</CustomText>
    </Navigate>
    <Navigate to={""}>
        <View style={styles.iconWrapper}>
            <Image source={require("../../assets/icons/dress.png")} alt="" style={styles.icon} />
        </View>
        <CustomText>سبک پوشش</CustomText>
    </Navigate>
    <Navigate to={""}>
        <View style={styles.iconWrapper}>
            <Image source={require("../../assets/icons/Psychology.png")} alt="" style={styles.icon} />
        </View>
        <CustomText>روان شناسی</CustomText>
    </Navigate>
    <Navigate to={""}>
        <View style={styles.iconWrapper}>
            <Image source={require("../../assets/icons/education.png")} alt="" style={styles.icon} />
        </View>
        <CustomText>آموزش</CustomText>
    </Navigate>
    <Navigate to={""}>
        <View style={styles.iconWrapper}>
            <Image source={require("../../assets/icons/white-left-chevron.png")} alt="" style={styles.icon} />
        </View>
        <CustomText>همه موارد</CustomText>
    </Navigate>
    <View style={styles.seperator}></View>
    <CustomText>رفاهی</CustomText>
    <Navigate to={""}>
        <View style={styles.iconWrapper}>
            <Image source={require("../../assets/icons/grow.png")} alt="" style={styles.icon} />
        </View>
        <CustomText>توسعه</CustomText>
    </Navigate>
    <Navigate to={""}>
        <View style={styles.iconWrapper}>
            <Image source={require("../../assets/icons/bag.png")} alt="" style={styles.icon} />
        </View>
        <CustomText>کارمندان نمونه</CustomText>
    </Navigate>
    <Navigate to={""}>
        <View style={styles.iconWrapper}>
            <Image source={require("../../assets/icons/shop.png")} alt="" style={styles.icon} />
        </View>
        <CustomText>تخفیفات داغ</CustomText>
    </Navigate>
    <Navigate to={""}>
        <View style={styles.iconWrapper}>
            <Image source={require("../../assets/icons/biography.png")} alt="" style={styles.icon} />
        </View>
        <CustomText>بیوگرافی</CustomText>
    </Navigate>
    <Navigate to={""}>
        <View style={styles.iconWrapper}>
            <Image source={require("../../assets/icons/happy.png")} alt="" style={styles.icon} />
        </View>
        <CustomText>هنر و سرگرمی</CustomText>
    </Navigate>
    <Navigate to={""}>
        <View style={styles.iconWrapper}>
            <Image source={require("../../assets/icons/health.png")} alt="" style={styles.icon} />
        </View>
        <CustomText>سلامتی</CustomText>
    </Navigate>
    <Navigate to={""}>
        <View style={styles.iconWrapper}>
            <Image source={require("../../assets/icons/travel.png")} alt="" style={styles.icon} />
        </View>
        <CustomText>گردشگری</CustomText>
    </Navigate>
    <Navigate to={""}>
        <View style={styles.iconWrapper}>
            <Image source={require("../../assets/icons/white-left-chevron.png")} alt="" style={styles.icon} />
        </View>
        <CustomText>همه موارد</CustomText>
    </Navigate>
  </View>
}
