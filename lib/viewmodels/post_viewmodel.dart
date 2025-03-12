import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import '../models/post_model.dart'; // Import the PostModel

class PostViewModel extends ChangeNotifier {
  List<PostModel> _posts = [];
  bool _isLoading = false;
  String? _errorMessage;

  List<PostModel> get posts => _posts;
  bool get isLoading => _isLoading;
  String? get errorMessage => _errorMessage;

  Future<void> fetchPosts() async {
    _isLoading = true;
    _errorMessage = null;
    notifyListeners(); // Notify UI to show loading

    try {
      final response = await http
          .get(Uri.parse('https://jsonplaceholder.typicode.com/posts'));

      if (response.statusCode == 200) {
        final List<dynamic> data = json.decode(response.body);
        _posts = data
            .map((json) => PostModel.fromJson(json))
            .toList(); // Use PostModel
      } else {
        _errorMessage =
            "Failed to load posts. Status Code: ${response.statusCode}";
      }
    } catch (e) {
      _errorMessage =
          "Something went wrong! Please check your internet connection.";
    }

    _isLoading = false;
    notifyListeners(); // Notify UI to update
  }
}
