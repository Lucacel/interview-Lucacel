import React, { Component } from "react";
import { Search } from "./components/Search";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LikedSongs } from "./components/LikedSongs";
//import logo from './logo.svg';

const queryClient = new QueryClient();

class App extends Component {
  render() {
    return (
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen bg-onyx p-8">
          <Search />
          <LikedSongs />
        </div>
      </QueryClientProvider>
    );
  }
}

export default App;
