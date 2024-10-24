package com.bergamo;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class LoginServlet extends HttpServlet {
    private final String USERNAME = "admin";
    private final String PASSWORD = "senha123";

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        System.out.println("Username: " + username);

        if (USERNAME.equals(username) && PASSWORD.equals(password)) {
            response.sendRedirect("success.jsp");
        } else {
            request.getRequestDispatcher("login.jsp").forward(request, response);
        }
    }
}

