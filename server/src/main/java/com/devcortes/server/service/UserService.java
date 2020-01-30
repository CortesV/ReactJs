package com.devcortes.server.service;

import com.devcortes.server.components.dto.UserDto;
import com.devcortes.server.components.entity.User;
import com.devcortes.server.components.exception.EntityEmptyException;
import com.devcortes.server.components.exception.UserNotFoundException;
import com.devcortes.server.components.repository.UserRepository;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserDto createUser(UserDto userDto) throws EntityEmptyException {
        if (Objects.isNull(userDto) || StringUtils.isBlank(userDto.getEmail()) || StringUtils.isBlank(userDto.getPassword())) {
            throw new EntityEmptyException("Some of required fields are empty.");
        }
        User user = new User(userDto.getEmail(), userDto.getPassword());
        User persistUser = this.userRepository.save(user);
        return new UserDto(persistUser.getId());
    }

    public UserDto findUser(Long userId) throws UserNotFoundException {
        Optional<User> persistUser = this.userRepository.findById(userId);
        if (!persistUser.isPresent()) {
            throw new UserNotFoundException(String.format("Not found user by id - %d", userId));
        }
        User user = persistUser.get();
        return new UserDto(user.getId(), user.getEmail(), user.getPassword());
    }
}
