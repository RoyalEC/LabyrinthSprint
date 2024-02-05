cmake_minimum_required(VERSION 3.10)
project(LabyrinthSprint)

set(CMAKE_CXX_STANDARD 14)

find_path(WEBSOCKETPP_INCLUDE_DIR NAMES websocketpp/config/asio_no_tls.hpp)
include_directories(${WEBSOCKETPP_INCLUDE_DIR})

add_executable(LabyrinthSprint main.cpp)