import 'dart:convert';
import 'package:http/http.dart' as http;
import '../models/post_model.dart'; // Ensure correct import

class ApiService {
  static const String url = "https://jsonplaceholder.typicode.com/posts";

  static Future<List<PostModel>> fetchPosts() async {
    // Use PostModel
    try {
      final response = await http.get(Uri.parse(url));

      if (response.statusCode == 200) {
        List jsonResponse = json.decode(response.body);
        return jsonResponse
            .map((data) => PostModel.fromJson(data))
            .toList(); // Use PostModel
      } else {
        throw Exception("Failed to load posts");
      }
    } catch (e) {
      throw Exception("Error: $e");
    }
  }
}
