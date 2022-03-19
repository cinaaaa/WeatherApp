import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';

const LazyImage = ({
    imageURL
}) => (
    <Image
       source={{ uri: imageURL }}
       style={{ width: 100, height: 100 }}
       PlaceholderContent={<ActivityIndicator />}
    />
);

export default LazyImage;