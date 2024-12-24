import { userService } from "@/lib/service/user_service";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useQuery } from "react-query";

export default function HomeScreen() {
  const currentUserQuery = useQuery("currentUser", userService.getCurrentUser);

  return (
    <SafeAreaView>
      {currentUserQuery.isLoading ? (
        <Text className="text-white">Loading...</Text>
      ) : (
        <Text className="text-white">
          Hello {currentUserQuery.data?.fullName}
        </Text>
      )}

      {currentUserQuery.isError && <Text className="text-white">Error</Text>}
    </SafeAreaView>
  );
}
