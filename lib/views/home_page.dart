import 'package:api/viewmodels/post_viewmodel.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  void initState() {
    super.initState();
    Future.delayed(Duration.zero, () {
      context.read<PostViewModel>().fetchPosts();
    });
  }

  @override
  Widget build(BuildContext context) {
    final postViewModel = context.watch<PostViewModel>();

    return Scaffold(
      appBar: AppBar(
        title: Text(
          'API Posts',
          style: TextStyle(fontWeight: FontWeight.bold),
        ),
        flexibleSpace: Container(
          decoration: BoxDecoration(
            gradient: LinearGradient(
              colors: [const Color.fromARGB(149, 68, 137, 255),
                const Color.fromARGB(255, 223, 64, 251)
              ],
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
            ),
          ),
        ),
        centerTitle: true,
      ),
      body: postViewModel.isLoading
          ? Center(child: CircularProgressIndicator())
          : postViewModel.errorMessage != null
              ? Center(
                  child: Text(
                    postViewModel.errorMessage!,
                    style: TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.bold,
                        color: Colors.red),
                  ),
                )
              : RefreshIndicator(
                  onRefresh: () async {
                    await context.read<PostViewModel>().fetchPosts();
                  },
                  child: Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: ListView.builder(
                      itemCount: postViewModel.posts.length,
                      itemBuilder: (context, index) {
                        return AnimatedContainer(
                          duration: Duration(milliseconds: 400),
                          curve: Curves.easeInOut,
                          child: Card(
                            elevation: 8,
                            shadowColor: Colors.blueAccent.withOpacity(0.4),
                            margin: EdgeInsets.symmetric(
                                vertical: 10, horizontal: 6),
                            shape: RoundedRectangleBorder(
                                borderRadius: BorderRadius.circular(16)),
                            color: Colors.white
                                .withOpacity(0.9), // Glassmorphism effect
                            child: InkWell(
                              onTap: () {
                                // Add navigation or action here
                              },
                              borderRadius: BorderRadius.circular(16),
                              splashColor: Colors.blueAccent.withOpacity(0.3),
                              child: ListTile(
                                contentPadding: EdgeInsets.all(14),
                                title: Text(
                                  postViewModel.posts[index].title,
                                  style: TextStyle(
                                      fontSize: 18,
                                      fontWeight: FontWeight.bold),
                                ),
                                subtitle: Padding(
                                  padding: const EdgeInsets.only(top: 6.0),
                                  child: Text(
                                    postViewModel.posts[index].body,
                                    style: TextStyle(
                                        fontSize: 12,color: Colors.grey[700]),
                                  ),
                                ),
                                leading: CircleAvatar(
                                  radius: 25,
                                  backgroundColor: Colors.transparent,
                                  child: Container(
                                    decoration: BoxDecoration(
                                      shape: BoxShape.circle,
                                      gradient: LinearGradient(
                                        colors: [
                                          Colors.blueAccent,
                                          Colors.purpleAccent
                                        ],
                                        begin: Alignment.topLeft,
                                        end: Alignment.bottomRight,
                                      ),
                                    ),
                                    child: Center(
                                      child: Text(
                                        postViewModel.posts[index].title[0]
                                            .toUpperCase(),
                                        style: TextStyle(
                                            color: Colors.white,
                                            fontWeight: FontWeight.bold,
                                            fontSize: 18),
                                      ),
                                    ),
                                  ),
                                ),
                                
                              ),
                            ),
                          ),

                        );
                      },
                    ),
                  ),
                ),
    );
  }
}
