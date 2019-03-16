package com.todolist.web.controller;

import com.todolist.model.*;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/* This class is dead simple. Again, there’s a ton of stuff going on behind the scenes. 
   All of the methods we’ll need for the REST API for our Todo app 
   will actually be automatically generated for us here. 
   You could, however, define some custom access methods in this class if you needed to.  */

@RepositoryRestResource
public interface TodoRepository extends JpaRepository<Todo, Long> {

}
